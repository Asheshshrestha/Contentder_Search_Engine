from django.db import models

# Create your models here.

class ContentderData(models.Model):
    template = models.TextField(null=True)
    html_code = models.TextField(null=True)
    row_structure = models.TextField(null=True)


