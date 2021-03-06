import * as express from 'express';
const app = express();

// app.use(authenticate);
// app.use(requestLog);
// app.use([authenticate, requestLog]);

app.get('/', [authenticate, requestLog], (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send('Hello World! ' + res.get("surname"));
    next();
});

app.get('/unauth', (req: express.Request, res: express.Response) => {
    res.send('Hello World! unauth');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

function authenticate(req: express.Request, res: express.Response, next: express.NextFunction) {
    const userId = req.header('auth');
    if (!userId || userId !== 'almog') {
        console.log(userId);
        res.status(401).send('Authentication Error');
        return;
    }
    res.set('surname', 'laktivi');
    next();
}

function requestLog(req: express.Request, res: express.Response, next: express.NextFunction) {
    console.log(`${req.method}  ${req.hostname}${req.url} for user: ${req.header('auth')}`);
    next();
}