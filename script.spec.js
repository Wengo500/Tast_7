describe('funcions', () => {
    describe('notGlobally', () => {
        it('should show max depth of object', () => {
            expect(notGlobally(car)).to.equal(4);
        });
    });

    describe('objDifferences', () => {
        it('the number of differences in the two objects', () => {

            expect(objDifferences(car, bicycle)).to.equal(3);
        });
    });
});