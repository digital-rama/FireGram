import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { makeStyles } from '@material-ui/core/styles';





const UploadForm = () =>
{
    const [ file, setFile ] = useState(null);
    const [ error, setError ] = useState(null);

    const types = [ 'image/png', 'image/jpeg' ];

    const changeHandler = (e) =>
    {
        let selected = e.target.files[ 0 ];
        if (selected && types.includes(selected.type))
        {
            setFile(selected);
            setError("");
        } else
        {
            setFile(null);
            setError("Please select an Image File (PNG / JPEG)");
        }
    };


    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: 'none',
        },
    }));

    const classes = useStyles();


    return (
        <form>
            <div className="file-box">
                <input accept="image/*" onChange={ changeHandler } className={ classes.input } id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera fontSize="large" />
                    </IconButton>
                </label>
            </div>
            <div className="output">
                { error && <div className="error">{ error }</div> }
                { file && <div>{ file.name }</div> }
                { file && <ProgressBar file={ file } setFile={ setFile } /> }
            </div>
        </form>
    );
};


export default UploadForm;