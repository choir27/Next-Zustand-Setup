"use client"
import Nav from "../components/Nav"
import FirstName from "../components/Input/FirstName"

export default function Home() {

    return(
      <main>
              <Nav/>
              <form id = "authentication">
                  <FirstName/>
              </form>
      </main>
    )
  }

  // http://localhost:3000/