from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass


class Attachment(models.Model):
    email = models.ForeignKey("Email", on_delete=models.CASCADE, related_name="attachments_set")  # Changed related_name to avoid clash
    file = models.FileField(upload_to="attachments/")  # Store attachments in a folder called 'attachments'
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Attachment for email {self.email.id} - {self.file.name}"


class Email(models.Model):
    user = models.ForeignKey("User", on_delete=models.CASCADE, related_name="emails")
    sender = models.ForeignKey("User", on_delete=models.PROTECT, related_name="emails_sent")
    recipients = models.ManyToManyField("User", related_name="emails_received")
    subject = models.CharField(max_length=255)
    body = models.TextField(blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    read = models.BooleanField(default=False)
    archived = models.BooleanField(default=False)
    attachments = models.ManyToManyField(Attachment, blank=True, related_name="emails")

    def serialize(self):
        return {
            "id": self.id,
            "sender": self.sender.email,
            "recipients": [user.email for user in self.recipients.all()],
            "subject": self.subject,
            "body": self.body,
            "timestamp": self.timestamp.strftime("%b %d %Y, %I:%M %p"),
            "read": self.read,
            "archived": self.archived,
            "attachments": [attachment.file.url for attachment in self.attachments.all()] if self.attachments.exists() else None
        }
