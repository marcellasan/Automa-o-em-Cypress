describe('Login de usuários no alura pic', () =>{
    beforeEach(() =>{
        cy.visit('https://alura-fotos.herokuapp.com') 

        cy.intersect('POST', 'https://apialurapic.herokuapp.com/user/login', {
            statusCode: 400
        }).as('stubPost')
    })  

     it('fazer login de usuario válido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.wait('@stubPost')
        cy.contains('a', '(Logout').should('be.visible');
    })

   it('fazer login de usuario inválido', () => {
        cy.login('jaqueline','1234')
        cy.on ('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')      
        });
    })

    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuario => {
        it.only(`registra novo usuário ${usuario.userName}`, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();

    })

    })
    
})