import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

import { Container, Grid } from '@mui/material';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import './Tabsblog.css'
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
function Tabsblog() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
      <Container>
            <Box sx={{ width: '100%',marginBottom:"100px" }}>
               
                <div style={{textAlign:"center",marginBottom:"50px"}}>
                    <h3 style={{ fontWeight: "bold" }}>New <span style={{ color: "red" }}>C</span>ollection</h3>
                    <p>our new collection here.With over 50 years of experience, we’re the trusted guide in car shopping. <br/> Your needs are the most important thing to us.</p>
                </div>
                <TabPanel value={value} index={0}>
                    <Grid container spacing={2}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="h4">The 2022 Acura RDX</Typography>
                            <Typography variant="h5">Call for this : <span style={{ fontWeight: "bold" }}>01409130405</span></Typography>
                            
                            <div>
                                {
                                    [...Array(4).keys()]
                                        .map(() => {
                                            return <StarIcon sx={{ color: "goldenrod" }} />
                                        })
                                }
                            </div>

                            <Typography>The intersection of affordability and refinement is where the 2022 Acura RDX finds its place in the world.Automantia is the safest way of buying a new car. Before purchase we first of all carefully examine the chosen car and you then decide on the basis of its current condition and our recommendation</Typography>
                           
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            
                                    <img src="https://i.postimg.cc/Vkj4h4Xg/car121.jpg" className="tabpanelimage" style={{ width: "100%", height: "300px" }} />
                              
                        </Grid>
                        
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid container spacing={2}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="h4">2022 GMC SIERRA HD AT4</Typography>
                            <Typography variant="h5">Call for this : <span style={{ fontWeight: "bold" }}>01409130405</span></Typography>

                            <div>
                                {
                                    [...Array(4).keys()]
                                        .map(() => {
                                            return <StarIcon sx={{ color: "goldenrod" }} />
                                        })
                                }
                            </div>

                            <Typography>The intersection of affordability and refinement is where the 2022 Acura RDX finds its place in the world.Automantia is the safest way of buying a new car. Before purchase we first of all carefully examine the chosen car and you then decide on the basis of its current condition and our recommendation</Typography>

                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <img src="https://i.postimg.cc/wvxWLJyV/car212.jpg" className="tabpanelimage" style={{ width: "100%", height: "300px" }} />
                        </Grid>

                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Grid container spacing={2}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="h4">2022 BcF Avalon</Typography>
                            <Typography variant="h5">Call for this : <span style={{ fontWeight: "bold" }}>01409130405</span></Typography>

                            <div>
                                {
                                    [...Array(3).keys()]
                                        .map(() => {
                                            return <StarIcon sx={{ color: "goldenrod" }} />
                                        })
                                }
                            </div>

                            <Typography>The intersection of affordability and refinement is where the 2022 Acura RDX finds its place in the world.Automantia is the safest way of buying a new car. Before purchase we first of all carefully examine the chosen car and you then decide on the basis of its current condition and our recommendation</Typography>

                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <img src="https://i.postimg.cc/tJwDKMrS/car312.jpg" className="tabpanelimage" style={{ width: "100%", height: "300px" }} />
                        </Grid>

                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Grid container spacing={2}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Typography variant="h4">2022 Toyota Avalon</Typography>
                            <Typography variant="h5">Call for this : <span style={{ fontWeight: "bold" }}>01409130405</span></Typography>

                            <div>
                                {
                                    [...Array(5).keys()]
                                        .map(() => {
                                            return <StarIcon sx={{ color: "goldenrod" }} />
                                        })
                                }
                            </div>

                            <Typography>The intersection of affordability and refinement is where the 2022 Acura RDX finds its place in the world.Automantia is the safest way of buying a new car. Before purchase we first of all carefully examine the chosen car and you then decide on the basis of its current condition and our recommendation</Typography>

                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <img src="https://i.postimg.cc/WzhXfv7q/car412.jpg" className="tabpanelimage" style={{ width: "100%", height: "300px" }} />
                        </Grid>

                    </Grid>
                </TabPanel>

                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                        <Tab icon={<img src="https://i.postimg.cc/Vkj4h4Xg/car121.jpg" className="tabclass" />}  {...a11yProps(0)} />


                        <Tab icon={<img src="https://i.postimg.cc/wvxWLJyV/car212.jpg" className="tabclass" />}  {...a11yProps(1)} />
                        <Tab icon={<img src="https://i.postimg.cc/tJwDKMrS/car312.jpg" className="tabclass" />} {...a11yProps(2)} />
                        <Tab icon={<img src="https://i.postimg.cc/WzhXfv7q/car412.jpg" className="tabclass" />} {...a11yProps(3)} />
                    </Tabs>
                </Box>
            </Box> 
      </Container>
      
  )
}

export default Tabsblog