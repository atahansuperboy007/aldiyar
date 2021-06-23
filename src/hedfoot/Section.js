import React from 'react'

function Section(){
    return(
        <main>
          <form class="form">
              <p><input type="text" name="name" class="feedback-input" placeholder="Name" id="name"/></p>
              <p><textarea name="text" id="comment" placeholder="Message"class="feedback-input" ></textarea></p>
              <p><input type="email" name="email" class="feedback-input" placeholder="Email" id="email"/></p>
              <p><input type="password" name="password" class="feedback-input" placeholder="Password" id="password"/></p>
              <input type="submit" value="Submit" class="button-submit"/>
              <div class="ease"></div>
          </form>
      </main>
    )
}

export default Section