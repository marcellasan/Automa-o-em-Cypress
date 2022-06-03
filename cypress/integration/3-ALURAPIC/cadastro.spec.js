describe('Registro de usuários no alura pic', () =>{
    beforeEach(() =>{
        cy.visit('/') 
    })

    it('verifique mensagens de validação', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'User name is required').should('be.visible');
        cy.contains('ap-vmessage', 'Full name is required').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required').should('be.visible');

    })

    it('verifique mensagem de email inválido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('jaqueline');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('verifique mensagem de Nome com menos de 2 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="fullName"]').type('P');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })

    it('verifique mensagem de Nome com mais de 40 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="fullName"]').type('Maria Antonia da Silva Xavier dos Passos Souza');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Maximun length is 40').should('be.visible');
    })

   
    it('verifique mensagem de Senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it('verifique mensagem de Senha com mais de 18 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('1234567891234567891');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Maximun length is 18').should('be.visible');
    })

    it('verifique mensagem de UserName com menos de 2 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('P');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })

    it('verifique mensagem de UserName com mais de 30 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('Maria Antonia da Silva Xavier dos Passos Souza');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Maximun length is 30').should('be.visible');
    })

    it('verifica mensagem que  o nome de usário deve estar em minúsculo', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('PEDROnpm');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

})
