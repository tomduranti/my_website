//react
import { useId, useState } from 'react';

//mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles'

//i18n
import { useTranslation } from 'react-i18next';

//text
import { lngArr } from './LanguageSwitcher.js';


export default function LanguageSwitcher() {
    const [anchorEl, setAnchorEl] = useState(null);
    const { i18n } = useTranslation();
    const theme = useTheme();
    const id = useId();

    const buttonId = `${id}-button`;
    const menuId = `${id}-menu`;
    const open = Boolean(anchorEl);

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    const handleChangeLanguage = (locale) => (
        i18n.changeLanguage(locale),
        handleClose()
    );


    const lngArrList = lngArr.map(lng => {
        const isSelected = i18n.language === lng.locale;

        return (
            <MenuItem key={lng.id}
                onClick={() => handleChangeLanguage(lng.locale)}
                selected={isSelected}
                disableRipple
                sx={{
                    backgroundColor: 'transparent',
                    '&:hover, &.Mui-selected, &.Mui-selected:hover, &.Mui-focusVisible': {
                        backgroundColor: 'transparent',
                    },
                }}
            >
                <Typography variant='h5' sx={{ color: isSelected ? theme.vars.palette.text.contrastText : theme.vars.palette.text.primary, }}>{lng.locale}</Typography>
            </MenuItem>
        )
    });

    return (
        <Box component='div' sx={{ position: 'relative' }}>
            <Button
                id={buttonId}
                aria-controls={open ? menuId : undefined}

                aria-haspopup='true'
                aria-expanded={open}
                aria-label='Select Language'
                onClick={handleClick}
                sx={{ padding: 0, minWidth: 'fit-content', textTransform: 'lowercase', }}
            >
                <Typography variant='h5' sx={{ color: theme.vars.palette.text.primary, }}>{i18n.language}</Typography>
            </Button>
            <Menu
                id={menuId}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    list: {
                        'aria-labelledby': buttonId,
                        sx: {
                            padding: 0,
                            '& > li': {
                                paddingInline: 0,
                            }
                        },
                    },
                    paper: {
                        sx: {
                            backgroundColor: theme.vars.palette.primary.main,
                            backgroundImage: 'none',
                            boxShadow: 'none',
                        }
                    }
                }}

            >
                {lngArrList}
            </Menu>
        </Box>
    );
}