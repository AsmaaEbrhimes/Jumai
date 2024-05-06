

import { Col, Row, Container } from "react-bootstrap";
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { } from '@mui/material/Select';
import PopSize from "../detalisProduct/popupSize"
import { useState, useEffect } from "react";
import Data from "../glopalData/GlopalData";
import { useParams } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

const DetailsGlopal = () => {
    const [open, setOpen] = useState(false);
    const [detailsData, setDetailsData] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => setOpen(false)

    let params = useParams();
    let id = params._id;

    useEffect(() => {
        setDetailsData(Data);
    }, []);

    const findData = detailsData.find((ele) => ele.id === id);

    useEffect(() => {
        if (findData) {
            setSelectedImage(findData.img_section_2 || findData.img_section_3 || findData.img_section_4 || findData.img_section_5 || findData.img_section_6 || findData.mainimg);
        }
    }, [findData]);

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const names = [
        'الجيزه',
        'الدهقليه',
        'الاسكندريه',
        'بني سويف',
        'القاهره',
        'المنوفيه',
        'اسوان',
        'الفيوم',
        'الاقصر',
        'الفيوم',
    ];

    const getStyles = (name, personName, theme) => {
        return {
            fontWeight:
                personName.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    };
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div className="top" style={{ position: "relative", marginTop: "50px", border: "1px solid white" }}>
            <Container>
            <PopSize handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} />
                <Row style={{ position: "relative", marginTop: "200px" }}>
                    <Col xs="12" sm="12" md="5" xl="3">
                        <div className="right">
                            <p className="last">التوصيل والارجاع</p>
                            <p className="last">اختار العنوان</p>
                            <div>
                                <FormControl sx={{ m: 1, width: 230, mt: 3 }}>
                                    <Select
                                        multiple
                                        displayEmpty
                                        value={personName}
                                        onChange={handleChange}
                                        input={<OutlinedInput />}
                                        renderValue={(selected) => {
                                            if (selected.length === 0) {
                                                return <em>Placeholder</em>;
                                            }
                                            return selected.join(', ');
                                        }}
                                        MenuProps={MenuProps}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="" disabled>
                                            <em>Placeholder</em>
                                        </MenuItem>
                                        {names.map((name) => (
                                            <MenuItem
                                                key={name}
                                                value={name}
                                                style={getStyles(name, personName, theme)}
                                            >
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>

                            <div>
                                <FormControl sx={{ m: 1, width: 230, mt: 3 }}>
                                    <Select
                                        multiple
                                        displayEmpty
                                        value={personName}
                                        onChange={handleChange}
                                        input={<OutlinedInput />}
                                        renderValue={(selected) => {
                                            if (selected.length === 0) {
                                                return <em>Placeholder</em>;
                                            }
                                            return selected.join(', ');
                                        }}
                                        MenuProps={MenuProps}
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="" disabled>
                                            <em>Placeholder</em>
                                        </MenuItem>
                                        {names.map((name) => (
                                            <MenuItem
                                                key={name}
                                                value={name}
                                                style={getStyles(name, personName, theme)}
                                            >
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>

                            <div className="desc_bottom">
                                <div className="d-flex flex">
                                    <div>
                                        <h6>محطة الاستلام</h6>
                                        <p>تفاصيل
                                            مصاريف الشحن 20.00 جنيه
                                            جاهز للاستلام بين يوم ‎٠٣ أبريل‎ و يوم ‎٠٤ أبريل‎ عند الطلب في غضون ‎21hrs 13mins‎
                                        </p>
                                    </div>
                                    <i class="fa-solid fa-truck"></i>
                                </div>

                                <div className="d-flex flex">
                                    <div>
                                        <h6>توصيل للمنازل</h6>
                                        <p>
                                            يتم التوصيل بين يوم ‎٠٣ أبريل‎ و يوم ‎٠٤ أبريل‎ عند الطلب في غضون ‎21hrs 13mins‎
                                        </p>
                                    </div>
                                    <i class="fa-solid fa-receipt"></i>

                                </div>
                                <div className="d-flex flex">
                                    <div>
                                        <h6>سياسة الارجاع</h6>
                                        <p> من تاريخ الشراء، مع ضرورة الإبلاغ عن وجود اي عيب ظاهر في خلال 48 ساعة، للإستثناءات والشروط راجع سياسة الإرجاع من هنا.تفاصيل</p>
                                    </div>
                                    <i class="fa-solid fa-rotate-right"></i>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs="12" sm="12" md="7" xl="9">
                        {selectedImage && (
                            <div className="content_right_left">
                                <div className="left_product">
                                    <div>
                                        <div className="icon_action">
                                            <i class="fa-regular fa-heart heart"></i>
                                        </div>
                                        <div className="rating">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>

                                        <div onClick={handleClickOpen} className="btn_1"> <button>دليل المقاسات</button></div>

                                        <p className="desc_share">مشاركة هذا المنتج</p>
                                        <div className="icon_share">
                                            <i class="fa-brands fa-facebook"></i>
                                            <i class="fa-brands fa-square-twitter"></i>
                                            <i class="fa-brands fa-instagram"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="right_product"><img src={selectedImage} alt="" /></div>
                            </div>
                        )}
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default DetailsGlopal;
