from django.db import models

class Movie(models.Model):
    index = models.IntegerField(primary_key=True,db_column='Unnamed: 0') # Maps directly to 'Unnamed: 0'
    title = models.CharField(max_length=255)
    year = models.IntegerField()
    score = models.FloatField()
    url = models.URLField(null=True, blank=True)
    language = models.CharField(max_length=100, null=True, blank=True)
    type = models.CharField(max_length=100, null=True, blank=True)
    ontime = models.CharField(max_length=100, null=True, blank=True)
    production_company = models.TextField(null=True, blank=True)  # Allows for multiple companies
    production_country = models.CharField(max_length=100, null=True, blank=True)
    gross = models.DecimalField(max_digits=15, decimal_places=2, null=True, blank=True)
    awards = models.TextField(null=True, blank=True)
    oscar_number = models.IntegerField(null=True, blank=True,db_column='geted')  # change to an appropriate name for "geted"
    class Meta:
        db_table = 'data'  # Map this model to the 'data' table
        managed = False    # Do not create, delete, or alter this table with migrations
    def __str__(self):
        return self.title