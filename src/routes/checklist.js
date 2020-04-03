const express = require('express')

const router = express.Router()

const checklists = require('../models/checklists')

router.get('/', async (req, res) => {
    try {
        let checklist = await checklists.find({  })
        res.status(200).render('checklists/index', {checklist: checklist})
    } catch (error) {
        res.status(500).render('pages/error', {error: 'Erro ao exibir as listas'})
    }
    console.log('Olá')
    res.send()
})

router.get('/new', async (req, res) => {
    
    try {
        let checklist = new Checklist()
        res.status(200).render('checklists/new', { checklist:checklist })
        
    } catch (error) {
        res.status(500).render('pages/error', {error: 'Erro ao carregar o formulário'})
      }
})

router.post('/', async (req, res) => {
    let { name } = req.body.checklist
    let checklist = new Checklist({name})
    
    try {
        await Checklist.save()
        res.redirect('/checklists')
    } catch (error) {
        res.status(422).render('checklists/new', {checklists: {...checklist, error} })
      }
        
})




router.get('/:id', async (req, res) => {
    try {
        let checklist = await checklists.findById(req.params.id)
        res.status(200).render('checklists/show', {checklist: checklist})
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).render('pages/error', {error: 'Erro ao exibir as listas de tarefas'})
      }
})

router.put('/:id', async (req, res) => {
    let { name } = req.body
    try {
        let checklist = await checklists.findByIdAndUpdate(req.params.id, { name }, { new: true })
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error)
    }
    
    console.log(req.params.id)
    res.send(`PUT ID:${req.params.id}`)
})

router.delete('/:id', async (req, res) => {
    try {
        let checklist = await checklists.findByIdAndRemove(req.params.id)
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error)
    }
    console.log(req.params.id)
    res.send(`DELETE ID:${req.params.id}`)
})

module.exports = router