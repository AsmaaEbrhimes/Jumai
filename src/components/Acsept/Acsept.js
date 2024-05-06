import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import "./Accept.css"

export default function AcseptMale({ closeModelAccept, OpenModelAcept }) {


    const handleClose = () => {
        closeModelAccept()
    };

    return (
        <React.Fragment>
            <Dialog


                open={OpenModelAcept}
                onClose={handleClose}
            >

                <DialogContent>

                    <Box >
                        <h3>Are you sure you want to accept this request ?</h3>
                        <textarea>

                        </textarea>
                        <div className='btn_male'>
                            <button>Yes</button>
                            <button>No</button>
                        </div>

                    </Box>
                </DialogContent>



                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
