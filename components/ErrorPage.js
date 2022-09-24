import {Grid, Typography} from '@mui/material'

/**
 * 
 * @param {errorCode, errorMsg} props Error Summary
 */
export default function ErrorPage(props)
{
    return (
        <Grid sx={{
            fontSize: "30px",
            fontFamily: "-apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', 'Fira Sans', Avenir, 'Helvetica Neue', 'Lucida Grande', sans-serif",
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '700px',
            width: '100%'
            }}>
            <div>
                <Typography inputprops={{ form: { autocomplete: 'off' }}} sx={{
                    display: 'inline-block',
                    borderRight: '1px solid rgba(0, 0, 0,.3)', 
                    marginRight: '20px',
                    paddingRight: '20px',
                    fontSize: '24px', 
                    fontWeight: '500', 
                    }}>
                    {props.errorCode}
                </Typography>
                <Typography inputprops={{ form: { autocomplete: 'off' }}} sx={{
                    display: 'inline-block',
                    textAlign: 'left',
                    lineHeight: '49px', 
                    height: '49px',
                }}>
                    {props.errorMsg}
                </Typography>
            </div>
        </Grid>
    );
}