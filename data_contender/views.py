from django.shortcuts import render
from data_contender.urls_data import urls
from data_contender.models import ContentderData
from bs4 import BeautifulSoup as soup
from urllib.request import urlopen as uReq
import microsearch
from django.core.paginator import Paginator
import timeit
# Create your views
ms = microsearch.Microsearch('C:/Users/acer/BrainDigit(Inter)/search_data')

def get_data(request):
    template_name = 'complete_download.html'
    for url in urls:
        uClient = uReq(url)
        page_html = uClient.read()
        uClient.close()
        #print(contentder_url)
        print(url)
        
        page_soup = soup(page_html,"html.parser")
        rows = page_soup.find_all("div",{"class":"cRow"})
        for row in rows:
            component_text = ''
            print(row)
            html_data = str(row)
            components= row.find_all('div',{'class':'editor-component'})
            for component in components:
                try:
                    data_type = component.attrs['data-type']
                    print(data_type)
                    component_text = component_text+' ' + data_type
                except:
                    pass

            component_text = component_text 
            data = ContentderData(template=url,html_code=html_data,row_structure=component_text)
            data.save()
    print('end session')
    return render(request,template_name)



def load_data_to_search_engine(request):
    template_name = 'complete_download.html'
    total_data = ContentderData.objects.all()
    count=1
    for data in total_data:
        
        print(count)
        try:
            ms.index('row_data'+str(count),{'text':data.row_structure,'html_code':data.html_code,'page_url':data.template})
            count= count+1
        except:
            print('ex')
    return render(request,template_name)



def search_data(request):
    template_name = 'home.html'
    query = request.GET.get('q')
    offset = request.GET.get('offset')
    if query:
        result ={'total_hits':0,'results':[]}
        total_time=0
        end_time=0
        start_time =0
        result_data = []
        
        template_name = 'result.html'
        
        try:
            start_time = timeit.default_timer()
            result = ms.search(query)
            end_time = timeit.default_timer()
            total_obj = result['results']
            paginator = Paginator(total_obj,20)
            page = request.GET.get('page')
            result_data = paginator.get_page(page)
            total_time = end_time - start_time
        except:
            print('ex')
            total_time = 0
        
        
        return render(request,template_name,{'total_hits':result['total_hits'],'results':result_data,'time':total_time})
    

    return render(request,template_name)





            

