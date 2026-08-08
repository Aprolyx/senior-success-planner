function Contact() {
  return (
    <main>
      <h2>Contact an Advisor</h2>

      <form>
        <label>
          First Name
          <input type="text" />
        </label>

        <label>
          Last Name
          <input type="text" />
        </label>

        <label>
          Email
          <input type="email" />
        </label>

        <label>
          Comments
          <textarea />
        </label>

        <button type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}

export default Contact;
