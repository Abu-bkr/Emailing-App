document.addEventListener("DOMContentLoaded", function () {
  // Use buttons to toggle between views
  document.querySelector("#inbox").addEventListener("click", () => load_mailbox("inbox"));
  document.querySelector("#sent").addEventListener("click", () => load_mailbox("sent"));
  document.querySelector("#archived").addEventListener("click", () => load_mailbox("archive"));
  document.querySelector("#compose").addEventListener("click", compose_email);
  document.querySelector("#compose-form").addEventListener("submit", send_email);

  // By default, load the inbox
  load_mailbox("inbox");
});

// this is for the history tracking
document.addEventListener("DOMContentLoaded", function () {
  // Get the body element
  var body = document.body;

  // Get all child nodes of the body
  var children = Array.from(body.childNodes);

  // Reverse the order of the child nodes
  children.reverse();

  // Remove all existing children from the body
  children.forEach(function (child) {
      body.removeChild(child);
  });

  // Append the reversed child nodes back to the body
  children.forEach(function (child) {
      body.appendChild(child);
  });
});

function compose_email() {
  // Show compose view and hide other views
  document.querySelector("#emails-view").style.display = "none";
  document.querySelector("#show-email").style.display = "none";
  document.querySelector("#compose-view").style.display = "block";

  // Clear out composition fields
  document.querySelector("#compose-recipients").value = "";
  document.querySelector("#compose-subject").value = "";
  document.querySelector("#compose-body").value = "";
}

function load_mailbox(mailbox) {
  // Show the mailbox and hide other views
  document.querySelector("#emails-view").style.display = "block";
  document.querySelector("#show-email").style.display = "none";
  document.querySelector("#compose-view").style.display = "none";

  // Show the mailbox name
  document.querySelector("#emails-view").innerHTML = `<h3>${
    mailbox.charAt(0).toUpperCase() + mailbox.slice(1)
  }</h3>`;

  fetch(`/emails/${mailbox}`)
    .then((response) => response.json())
    .then((emails) => {
      console.log(emails);
      // do something with mails
      for (let i = 0; i < emails.length; i++) {
        const email_cont = document.createElement("div");
        email_cont.className =
          "Email-container bg-light border  rounded mx-2 my-2 p-3";
        if (emails[i].read === true) {
          email_cont.className =
            "Email-container bg-warning bg-gradient border rounded mx-2 my-2 p-3";
        }
        const email_sender = document.createElement("h3");
        email_sender.className = "Email-content";
        const email_subject = document.createElement("h5");
        email_subject.className = "Email-content";
        const email_time = document.createElement("p");
        email_time.className = "Email-time";
        email_cont.addEventListener("click", function () {
          document.querySelector("#show-email").innerHTML = "";
          show_mail(emails[i]);
          read_email(emails[i]);
        });
        // assigning values to the container
        email_sender.innerHTML = `Sender : ${emails[i].sender}`;
        email_subject.innerHTML = `Subject : ${emails[i].subject}`;
        email_time.innerHTML = emails[i].timestamp;

        // appending all element needed for email details
        document.querySelector("#emails-view").append(email_cont);
        email_cont.appendChild(email_sender);
        email_cont.appendChild(email_subject);
        email_cont.appendChild(email_time);
      }
    });
}

//Sending email to the recipients
function send_email() {
  const recipients = document.querySelector("#compose-recipients").value;
  const subject = document.querySelector("#compose-subject").value;
  const body = document.querySelector("#compose-body").value;
  console.log(`${recipients}:${subject}:${body}`);
  fetch("/emails", {
    method: "POST",
    body: JSON.stringify({
      recipients: `${recipients}`,
      subject: `${subject}`,
      body: `${body}`,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      //print The result
      console.table(result);
    });
  // load the sent mail box
  load_mailbox("sent");
}

// to mark read the email
function read_email(email) {
  fetch(`/emails/${email.id}`, {
    method: "PUT",
    body: JSON.stringify({
      read: true,
    }),
  });
}

// to archive and unarchive the email
function archive_email(email) {
  fetch(`/emails/${email.id}`)
    .then((response) => response.json())
    .then((email) => {
      if (email.archived === true) {
        fetch(`/emails/${email.id}`, {
          method: "PUT",
          body: JSON.stringify({
            archived: false,
          }),
        })
        .then(()=>{load_mailbox("inbox")});

      } else {
        fetch(`/emails/${email.id}`, {
          method: "PUT",
          body: JSON.stringify({
            archived: true,
          }),
        })
      }
    });
    load_mailbox("archive");
}

// to show partcular email
function show_mail(email) {
  document.querySelector("#emails-view").style.display = "none";
  document.querySelector("#compose-view").style.display = "none";
  document.querySelector("#show-email").style.display = "block";

  const email_sender = document.createElement("h3");
  email_sender.className = "email-sender";
  email_sender.innerHTML = `Sender: ${email.sender}`;
  const email_subject = document.createElement("h6");
  email_subject.className = "email-subject";
  email_subject.innerHTML = `Subject: ${email.subject}`;
  const email_body = document.createElement("h6");
  email_body.className = "email-body";
  email_body.innerHTML = `body: ${email.body}`;
  const time = document.createElement("p");
  time.className = "email-time";
  time.innerHTML = email.timestamp;
  const email_heart = document.createElement("i");
  if (email.archived === true) {
    email_heart.className = "fa-solid fa-heart fa-4x";
  } else {
    email_heart.className = "fa-regular fa-heart fa-4x";
  }
  email_heart.addEventListener("click", function () {
    if (email.archived === true) {
      fetch(`/emails/${email.id}`, {
        method: "PUT",
        body: JSON.stringify({
          archived: false,
        }),
      }).then(load_mailbox("inbox"));
    } else {
      fetch(`/emails/${email.id}`, {
        method: "PUT",
        body: JSON.stringify({
          archived: true,
        }),
      }).then(load_mailbox("archive"));
    }
  });
  document.querySelector("#show-email").append(email_sender);
  document.querySelector("#show-email").append(email_subject);
  document.querySelector("#show-email").append(email_body);
  document.querySelector("#show-email").append(time);
  document.querySelector("#show-email").append(email_heart);
}
