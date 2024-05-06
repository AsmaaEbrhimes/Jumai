import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';


export default function RejectMale({closeModelReject, OpenModelReject }) {
    const handleClose = () => {
        closeModelReject()
    };

    return (
        <React.Fragment>
            <Dialog


                open={OpenModelReject}
                onClose={handleClose}
            >

                <DialogContent>

                    <Box >
                        <h3>Are you sure you want to reject this request ?</h3>
                        <textarea value="Message">

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
