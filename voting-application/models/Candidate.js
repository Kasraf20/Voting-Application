const mongoose = require('mongoose')


const candidateSchema = new mongoose.Schema({
    candidateName: {
        type: String,
        required : true
    },
    partyName: {
        type: String,
        required : true
    },
    alliance: {
        type:String,
        required : true
    },
    age:{
        type : Number,
        required : true
    },
    votes:[
        {
            user : {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required : true
            },
            votedAt:{
                type: Date,
                dafault: Date.now() 
            }
        }
    ],
    voteCount:{
        type: Number,
        default : 0
    }
    
})

const Candidate = mongoose.model('Candidate',candidateSchema)
module.exports =  Candidate