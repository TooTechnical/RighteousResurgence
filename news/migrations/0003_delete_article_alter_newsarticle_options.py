# Generated by Django 5.2.1 on 2025-05-29 13:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0002_article'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Article',
        ),
        migrations.AlterModelOptions(
            name='newsarticle',
            options={'ordering': ['-created_at']},
        ),
    ]
