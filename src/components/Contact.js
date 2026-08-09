import { useState } from 'react';

function Contact() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: ''
  });

  function handleSubmit(event) {
  event.preventDefault();

  setFormData({
    firstName: '',
    lastName: '',
    email: '',
    comments: ''
  });

  alert('Thank you! Your message has been submitted.');
}

  return (
    <main>
      <h2>Contact an Advisor</h2>
      <p>
  Need help with your senior year? Send a message if you have questions
  about college applications, financial aid, scholarships, or graduation planning.
</p>


     <form onSubmit={handleSubmit}>

        <label>
          First Name
          <input
            type="text"
            value={formData.firstName}
            onChange={(event) =>
              setFormData({
                ...formData,
                firstName: event.target.value
              })
            }
          />
        </label>

        <label>
  Last Name
  <input
    type="text"
    value={formData.lastName}
    onChange={(event) =>
      setFormData({
        ...formData,
        lastName: event.target.value
      })
    }
  />
</label>

<label>
  Email
  <input
    type="email"
    value={formData.email}
    onChange={(event) =>
      setFormData({
        ...formData,
        email: event.target.value
      })
    }
  />
</label>        

<label>
  Comments
  <textarea
    value={formData.comments}
    onChange={(event) =>
      setFormData({
        ...formData,
        comments: event.target.value
      })
    }
  />
</label>

        <button type="submit">
          Submit
        </button>

      </form>
    </main>
  );
}

export default Contact;
