import { Button, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles';
import React from 'react'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import TextareaAutosize from '@mui/core/TextareaAutosize';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Input = styled('input')({
    display: 'none',
});

function Addblog() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    ///////////////////////////////
    const onSubmit = async (data) => {
        console.log(data)
        let imageURL
        const imageData = new FormData();
        imageData.set("key", "06a916692ea087d185221539196ef3a5");
        imageData.append("image", data.img[0]);
        try {
            const res = await axios.post(
                "https://api.imgbb.com/1/upload",
                imageData
            );
            imageURL = res.data.data.display_url;
        } catch (error) {

            return alert("Failed to upload the image!");
        }


        const blogData = {
            name: data.name,
            description: data.description,
            subtitle: data.subtitle,
            image: imageURL,
        };

        axios.post(`https://warm-depths-72297.herokuapp.com/addblog`, blogData)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    toast.success("blog add successfully");
                    return
                } else {
                    toast.error("blog already exists")
                }

            })
            .catch(err => console.log(err))
        reset();
    }
    ///////////////////// 
    ///////////////////////   

    return (
        <Box>
            <title>Add product</title>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} className="reviewform">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ToastContainer />
                        <Typography variant="h4" style={{ textAlign: "center", marginBottom: "30px" }}>Add a blog</Typography>


                        <TextField   {...register("name", { required: true })} id="standard-basic" sx={{ display: "block" }} label="blog name" variant="standard" />
                        <Typography sx={{ color: "red" }}>{errors.name && <span>Blog name is required</span>}</Typography>

                        <TextField {...register("subtitle", { required: true })} id="standard-basic" sx={{ display: "block" }} label="blog subtitle" variant="standard" />
                        <Typography sx={{ color: "red" }}>{errors.subtitle && <span>subtitle is required</span>}</Typography>

                        {/* <TextField {...register("img", { required: true })} id="standard-basic"  sx={{display:"block"}}  label="Image url" variant="standard" />
                       <Typography sx={{color:"red"}}>{errors.img && <span>img url is required</span>}</Typography> */}

                        <input id="contained-button-file" type="file" {...register("img", { required: true })} />


                        <Typography sx={{ color: "red" }}>{errors.img && <span>img url is required</span>}</Typography>
                        <TextareaAutosize
                            maxRows={4}
                            aria-label="maximum height"
                            placeholder="Maximum 4 rows"
                            {...register("description", { required: true })}
                            style={{ width: "100%", height: "200px", marginTop: "20px" }}
                        />
                        <Typography sx={{ color: "red" }}>{errors.description && <span>blog description is required</span>}</Typography>
                        <Button type="submit" variant="contained" style={{ marginTop: "30px", width: "100%", marginBottom: "20px" }}>Add product</Button>

                    </form>

                </Grid>

            </Grid>
        </Box>
    )
}

export default Addblog
