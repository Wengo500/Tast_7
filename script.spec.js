describe('funcions', () => {
    describe('maxDepth', () => {
        it('should show max depth of object', () => {
            expect(maxDepth(car)).to.equal(5);
        });
    });

    describe('objDifferences', () => {
        it('the number of differences in the two objects', () => {

            expect(objDifferences(car, bicycle)).to.equal(3);
        });
    });
});
