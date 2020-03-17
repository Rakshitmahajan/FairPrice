from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Item(models.Model):
    model = models.CharField(max_length=100, null=True,blank=True)
    company = models.CharField(max_length=100,null=True,blank=True)
    # img_url = models.CharField(max_length=1000,null=True,blank=True)
    img_url = models.FileField(upload_to='frontend/src/assets', default=None, null=True,blank=True,)
    description = models.CharField(max_length=1000,null=True,blank=True)
    price = models.IntegerField(null=True,blank=True)
    trending = models.BooleanField(null=True,blank=True,default=True) 
    Category = models.ForeignKey(Category, default=None, verbose_name="Category", on_delete=models.SET_DEFAULT)

    def __str__(self):
        return self.model
