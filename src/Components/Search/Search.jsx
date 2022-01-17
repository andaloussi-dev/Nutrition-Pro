import React , {useState} from 'react';
import styles from './Search.module.css'
import { Typography, Box, TextField ,IconButton , InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import cx from 'classnames';

export default function Search({changeQuery}) {
    
    const [data,setData] = useState('');
    return (
        <Box sx={{display:'flex' ,flexDirection:'column' , alignItems: 'center' }} className={styles.container}>
            <Typography variant="h1" className={cx(styles.title, styles.txt)}>
                Get <span className={styles.textSnip}> Nutrition</span> Facts Now
            </Typography>
            <Typography variant="h5" className={cx(styles.paragraph, styles.txt)}>
                <b className={styles.textSnip}>Free</b> nutrition data for <b className={styles.textSnip}>100,000+</b> foods and beverages
            </Typography>

            <Box sx={{
                    marginTop:'50px',
                    width: 900,
                    maxWidth: '100%',
                    display:'flex',
                    justifyContent:'center'
                }}
            >
                <TextField onChange={(e) => setData(e.target.value)} className={styles.searchInput} label="What did you Eat today?" variant="filled" fullWidth focused 
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <IconButton>
                          <SearchIcon onClick={()=>{ return changeQuery(data)}} sx={{color:'#fff'}}/>
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />

            </Box>
        </Box>
    )
}
