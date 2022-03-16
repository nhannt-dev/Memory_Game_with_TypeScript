import express, {Request, Response} from 'express'
import path from 'path'


const app = express()

app.set('view engine', 'ejs')
app.set('views', 'templates')

app.use('/assets', express.static(path.join('dist/frontend')))
app.use('/', express.static(path.join('public')))

app.get('/board', (req: Request, res: Response) => {
    res.render('index', {})
})
app.get('/login', (req: Request, res: Response) => {
    res.render('login', {})
})
app.listen(3000, () => {
    console.log('Server chạy thành công tại cổng 3000')
})