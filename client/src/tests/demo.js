console.log("hola mundo");

test('deberian de ser iguales los string ', () => {
        const mensaje = 'Hola Mundo';
        const mensaje2 = `Hola Mundo`;
      
        expect(mensaje).toBe(mensaje2);
})
