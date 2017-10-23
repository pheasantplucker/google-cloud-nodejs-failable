const equal = require("assert").deepEqual
const {createTopic} = require("./gcloud")

describe('gcloud.js', () => {
    describe('createTopic()', ()=>{
        it('should make the topic', async () => {
            await createTopic()
        })
    })
})
