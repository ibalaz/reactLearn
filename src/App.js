import './App.css';

import {Button, Card, CardContent, Grid, makeStyles, Paper, TextField} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2} alignItems="flex-end">
                <Grid item xs direction="row" justify="left" alignItems="center" >
                    <Paper>Logo</Paper>
                </Grid>
                <Grid item xs={9} direction="row" justify="left" alignItems="center" >
                    <Paper>Default</Paper>
                </Grid>
            </Grid>
            <Grid container justify="center">
                <Card>
                    <CardContent>
                        <form noValidate autoComplete="off">
                            <TextField required id="tokenSN" label="Serijski broj tokena" variant="outlined" />
                            <TextField required id="otp" label="APPLI 1" variant="outlined" />
                        </form>
                    </CardContent>
                </Card>
            </Grid>
            <Grid container spacing={3} justify="center" alignItems="flex-end">
                <Button>Kontakt centar</Button>
                <Button>Pomoć</Button>
                <Button>Nešto</Button>
            </Grid>
        </div>

    )
}

export default App;
