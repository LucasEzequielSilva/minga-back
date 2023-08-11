import { expect } from "chai";
import request from "supertest";
import app from "../app.js";

describe("Tests on /auth path", () => {
    let server = null
    let api = null
    const userTokenGoogleSuccess = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjJkOWE1ZWY1YjEyNjIzYzkxNjcxYTcwOTNjYjMyMzMzM2NkMDdkMDkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2ODUzMjc0NTMsImF1ZCI6IjQyNjA2OTIzNDgxOS1vYW1pczVoZ3ZuNWphaGphbnQ1ZHVmYm45ZWxqamNtMi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMzkyOTk4NDY3Mzg2NzA1NzYzNSIsImVtYWlsIjoiY2FydG9sYW5vZmFjdW5kb0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXpwIjoiNDI2MDY5MjM0ODE5LW9hbWlzNWhndm41amFoamFudDVkdWZibjllbGpqY20yLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwibmFtZSI6IkZhY3VuZG8gQ2FydG9sYW5vIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBY0hUdGYxaDZ2X0x4Y2RtdzRCVElzWVhOak82dmlfZGJNWWhyU2FvRmJVPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkZhY3VuZG8iLCJmYW1pbHlfbmFtZSI6IkNhcnRvbGFubyIsImlhdCI6MTY4NTMyNzc1MywiZXhwIjoxNjg1MzMxMzUzLCJqdGkiOiI1NmJlZTE1YWExNGM5OTIzMzBiYTE3YjkwZmI3ZDE2Y2JkZGVkMzQ5In0.HIuqse8rWQp2kAhbgx03Oy8crfGm8Ao6Amj-96dbphZVwcesw_4C6u4-VgPEHBoV3BpqmPfIeBhjVxBDSmXWtpGA8FUrcoexelYgI3TEERqu2bWqPxgPd6bohSIhDYyRk58SEYU1-AFJ0M-nA2CR6VgTb3YjRuuCaO4uZndzrh4kz0L-jlQmsRM_zm0IeC0pYLapWlMRKfQ1WCTEvATDRmHl-g_JHw6uv_5_rFTH3p1g8ioCrxv6GIc2wLzH3EehCmt1lccRUdOZOq9Q7k0VPIaRJY9qUmN0psWumTm7lZfGjzz5Hp3XuOfdVrlAitgrz_W0EouIywF59f5zXt66ng"
    
    let donate = {
        title: "Small donor",
        description: "Make a difference with your donation. Every amount counts!",
        price: 1000,
        image: "https://github.com/cartolanofacundo/minga_azul_front/blob/main/src/assets/images/logo_footer.png?raw=true"
    }
    
    before(async() => {
        server = await app.listen(8000)
        api = request(app)
    })

    describe("POST -> signin/google", () => {
        it("on sucess should return status 200, success true token and user",async () => {
            const {body, statusCode}= await api.post("/auth/signin/google").send({credential: userTokenGoogleSuccess})
            expect(body).to.have.property("success").equal(true)
            expect(body).to.have.property("token")
            expect(body).to.have.property("user")
            expect(statusCode).to.equal(200)
        })
    })
    describe("POST -> payments", () => {
        it("on sucess should return status 200, and response object",async () => {
            const {body, statusCode}= await api.post("/payments").send(donate)
            expect(body).to.have.property("response")
            expect(statusCode).to.equal(200)
        })
    })

    
})