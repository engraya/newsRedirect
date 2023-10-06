const axios = require('axios');
require('dotenv').config()

const getAllNewsController = async(req, res) => {

    try {
        const APIKEY = process.env.APIKEY
        const coreNewsAPI = await axios.get(`https://newsapi.org/v2/everything?q=technology&apiKey=${APIKEY}`)
        res.render('newsPage', { articles : coreNewsAPI.data })
    } catch (error) {
        if(error.response) {
            res.render('newsPage', {articles : null})
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
        } else if (error.request) {
            res.render('newsPage', {articles : null})
            console.log(error.request)
        } else {    
            res.render('newsPage', {articles : null})
            console.log('Error', error.message)
        }
    }
}


const searchNewsController = async(req, res) => {
    let searchID = req.body.search

    try {
        const APIKEY = process.env.APIKEY
        const coreNewsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(searchID)}&apiKey=${APIKEY}`)
        res.render('newsSearch', { articles : coreNewsAPI.data, searchID : searchID })
    } catch (error) {
        if(error.response) {
            res.render('newsSearch', {articles : null})
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
        } else if (error.request) {
            res.render('newsSearch', {articles : null})
            console.log(error.request)
        } else {   
            res.render('newsSearch', {articles : null}) 
            console.log('Error', error.message)
        }
    }
}


module.exports = { getAllNewsController, searchNewsController }