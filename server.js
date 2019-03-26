const express = require('express')
const bodyParser = require('body-parser')
const app = express()


const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID
//const uri = "mongodb+srv://renan:bozzeda@old0-imqyh.mongodb.net/test?retryWrites=true";
const uri = "mongodb+srv://admuser:admuser@devweblab-uni7g.mongodb.net/test?retryWrites=true";

const port = process.env.PORT || 3000;

app.get('/show', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

MongoClient.connect(uri,  { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log(err)
    
    db = client.db("database")

    app.listen(3000, () => {
        console.log('server running on port 3000')
    })
}) 

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/', (req, res) => {
    let cursor = db.collection('data').find()
})



app.route("/cadastroUsuario")
.get((req, res) => {
    db.collection('data').find().toArray((err, results) => {
        if (err) return console.log(err)

        res.render('cadastroUsuario.ejs', {data: results})
    })
})
.post((req, res) => {
    res.redirect('/cadastroUsuario')
})

app.route("/cadastroPlano")
.get((req, res) => {
    db.collection('data').find().toArray((err, results) => {
        if (err) return console.log(err)

        res.render('cadastroPlano.ejs', {data: results})
    })
})
.post((req, res) => {
    res.redirect('/cadastroPlano')
})

app.route("/cadastroCurso")
.get((req, res) => {
    db.collection('data').find().toArray((err, results) => {
        if (err) return console.log(err)

        res.render('cadastroCurso.ejs', {data: results})
    })
})
.post((req, res) => {
    res.redirect('/cadastroCurso')
})

app.route("/cadastroDisciplina")
.get((req, res) => {
    db.collection('data').find().toArray((err, results) => {
        if (err) return console.log(err)

        res.render('cadastroDisciplina.ejs', {data: results})
    })
})
.post((req, res) => {
    res.redirect('/cadastroDisciplina')
})

app.route("/cadastroTurma")
.get((req, res) => {
    db.collection('data').find().toArray((err, results) => {
        if (err) return console.log(err)

        res.render('cadastroTurma.ejs', {data: results})
    })
})
.post((req, res) => {
    res.redirect('/cadastroTurma')
})






























app.route("/showUsuarios")
.get((req, res) => {
    db.collection('data.usuarios').find().toArray((err, results) => {
        if (err) return console.log(err)

        res.render('showUsuarios.ejs', {data: results})
    })
})
.post((req, res) => {
    db.collection('data').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('salvo no banco de dados')
        res.redirect('/showUsuarios')
    })
})

app.route("/showTurmas")
.get((req, res) => {
    db.collection('data.turmas').find().toArray((err, results) => {
        if (err) return console.log(err)

        res.render('showTurmas.ejs', {data: results})
    })
})
.post((req, res) => {
    db.collection('data').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('salvo no banco de dados')
        res.redirect('/showTurmas')
    })
})

app.route("/showPlanos")
.get((req, res) => {
    db.collection('data.planos').find().toArray((err, results) => {
        if (err) return console.log(err)

        res.render('showPlanos.ejs', {data: results})
    })
})
.post((req, res) => {
    db.collection('data').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('salvo no banco de dados')
        res.redirect('/showPlanos')
    })
})


app.route("/showCursos")
.get((req, res) => {
    db.collection('data.cursos').find().toArray((err, results) => {
        if (err) return console.log(err)

        res.render('showCursos.ejs', {data: results})
    })
})
.post((req, res) => {
    db.collection('data').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('salvo no banco de dados')
        res.redirect('/showCursos')
    })
})


app.route("/showDisciplinas")
.get((req, res) => {
    db.collection('data.disciplinas').find().toArray((err, results) => {
        if (err) return console.log(err)

        res.render('showDisciplinas.ejs', {data: results})
    })
})
.post((req, res) => {
    db.collection('data').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('salvo no banco de dados')
        res.redirect('/showDisciplinas')
    })
})














app.post('/cadUsuario', (req, res) => {
    db.collection('data.usuarios').save(req.body, (err, result) => {
        if (err) return console.log('erro - salvar - usuário')

        console.log('sucesso - salvar - usuário')
        res.redirect('/cadastroUsuario')
    })
})

app.post('/cadPlano', (req, res) => {
    db.collection('data.planos').save(req.body, (err, result) => {
        if (err) return console.log('erro - salvar - plano')

        console.log('sucesso - salvar - plano')
        res.redirect('/cadastroPlano')
    })
})

app.post('/cadCurso', (req, res) => {
    db.collection('data.cursos').save(req.body, (err, result) => {
        if (err) return console.log('erro - salvar - curso')

        console.log('sucesso - salvar - curso')
        res.redirect('/cadastroCurso')
    })
})

app.post('/cadDisciplina', (req, res) => {
    db.collection('data.disciplinas').save(req.body, (err, result) => {
        if (err) return console.log('erro - salvar - disciplina')

        console.log('sucesso - salvar - disciplina')
        res.redirect('/cadastroDisciplina')
    })
})

app.post('/cadTurma', (req, res) => {
    db.collection('data.turmas').save(req.body, (err, result) => {
        if (err) return console.log('erro - salvar - turma')

        console.log('sucesso - salvar - turma')
        res.redirect('/cadastroTurma')
    })
})














app.route('/edit/:id')
.get((req, res) => {
    var id = req.params.id

    db.collection('data').find(ObjectId(id)).toArray((err, result) => {
        if (err) return res.send(err)

        res.render('edit.ejs', {data: result})
    })
})
.post((req, res) => {
    var id = req.params.id
    var name = req.body.name
    var surname = req.body.surname

    db.collection('data').updateOne({_id: ObjectId(id)}, {
        $set: {
            name: name,
            surname: surname
        }
    }, (err, result) => {
        if (err) return res.send(err)

        res.redirect('/show')
        console.log('Atualizado no banco de dados')
    })
})

app.route("/delete/:id")
.get((req, res) => {
    var id = req.params.id

    db.collection('data').deleteOne({_id: ObjectId(id)}, (err, result) => {
        if (err) return res.send(500, err)
        console.log('Deletando do banco de dados!')
        res.redirect('/show')
    })
})