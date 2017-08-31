var request = require("request");

var base_url = "some_url/robots.txt";

describe("Verify robots txt", function() {

    describe("robots txt suite", function() {
        it("status code should be 200", function(done) {
            request.get(base_url, function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it("robots txt should have correct content", function(done) {
            request.get(base_url, function(error, response, body) {
                expect(body).toBeDefined();
                expect(body).toContain("some content");
                done();
            });
        });

        it("robots txt shouldnt have incorrect content", function(done) {
            request.get(base_url, function(error, response, body) {
                expect(body).toContain("some incorrect content");
                done();
            });
        });

    });
});