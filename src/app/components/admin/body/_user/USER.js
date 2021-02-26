
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/HomeAdmin.scss';
import axios from 'axios';
import Pagination from '../_pagination/Pagination';
function USER(props) {
    const api = axios.create({
        baseURL: `https://5fec7ae2595e420017c2be4d.mockapi.io/productjs`
    })
    const [state, setState] = useState({data: []});
    const [edit, setEdit] = useState([]);
    const [add, setADD] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [show, setShow] = useState({
        showEDIT: false,
        showADD: false
    });
    const [currentpage, setCurrentpage] = useState(1);
    // biến postperpage này như size dị...
    //ví dụ danh sách 10 phần tử cho nó là 2 thì hiển thị danh sách 2 còn 8 phần tử kia phần trang ra 1,2,3,4,5 
    //gồm 5 trang hỏng tin thử đi
    
    //trang có bao nhiêu phần tử.
    const [postperpage, setPostperpage] = useState(2);
    // biến totalPages này để set mảng chứa số trang bị cắt 1 2 3
    
    // số lượng trang.
    const [totalPages, setTotalPages] = useState([]);
    const getUser = async () => {
        //khai báo phần tử cuối
        const indexofLastPost = currentpage * postperpage;
        //khai báo phần tử đầu
        const indexofFirstPost = indexofLastPost - postperpage;
        try {
            let data = await api.get('/').then(({ data }) => data); 
            let arrPage = [];
            const Post = data.slice(indexofFirstPost, indexofLastPost);
            //                      1*2 = 2,            ,  2-2 = 0
            // 0,1
            // data => 2-> 8;
            setState({ data: Post });
            console.log(state);
            // cắt danh sách mảng bằng slice phần tử đầu phần tử cuối
            for (let i = 1; i <= Math.ceil(parseInt(data.length) / postperpage); i++) {
                arrPage.push({ item: i });
            }
            // rảnh log mảng arrPage ra xem...
            // số lượng trang - li
            setTotalPages(arrPage);
            //setTotalPages là cái mảng bị cắt rồi đó a e.....
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getUser();
        if (currentpage) {
            getUser();
        }
    }, [currentpage]);
    const createUser = async () => {
        let res = await api.post('/', add);
        getUser();   
    }
    const deleteUser = async (id) => {
        let data = await api.delete(`/${id}`)
        getUser();
    }
        const updateUser = async (id) => {
        let data = await api.put(`/${id}`, edit);
        getUser();
    }
    function handleClickEDIT(id, value) {
        setShow({...show,showEDIT: true});
        setEdit(value);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        console.log(edit);
        setEdit(edit => ({ ...edit, [name]: value }));
    }
    function handleChangeADD(event) {
        const { name, value } = event.target;
        setADD(add => ({ ...add, [name]: value }));
    }
    function handleSubmitADD(event) {
        event.preventDefault();
        setSubmitted(!submitted);
        createUser();
    }
    function handleSubmitEDIT(event) {
        event.preventDefault();
        setSubmitted(!submitted);
        setEdit(edit);
        updateUser(edit.id, edit);
    }
    const onAddPage = (page) => {
        setTimeout(function () {
            setCurrentpage(page);
        }, 1000);
    }

    console.log(totalPages);
    return (
        <section className="home-admin">
            <div className="home-left">
                <Link to="/">Home</Link>
                <Link to="/admin/user">USER</Link>
                <Link to="/admin/product">PRODUCT</Link>
                <Link to="/admin/category">CATEGORY</Link>
            </div>
            <div className="home-user home-right">
                <div className="col-12">
                    <span className="btn add">Thêm tài khoản</span>
                </div>
                <div className="col-12">
                    <div className="table">
                        <table className="col-auto">
                            <thead className="title">
                                <tr>
                                    <th>ID</th>
                                    <th>IMG AVATA</th>
                                    <th>NAME</th>
                                    <th>CREATED</th>
                                    <th>PERFORM</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ((state.data !== undefined)) ?
                                        state.data.map((value, key) => {

                                            return (
                                                <tr key={key}>
                                                    <td>{value.id}</td>
                                                    <img src={value.avatar} alt={123} />
                                                    <td>{value.name}</td>
                                                    <td>{value.createdAt}</td>
                                                    <td className="td-group">
                                                        <span className="btn delete" onClick={() => deleteUser(value.id)}>Xóa</span>
                                                        <span className="btn edit" onClick={() => handleClickEDIT(value.id, value)}>Sửa</span>
                                                    </td>
                                                </tr>
                                            );
                                        }) : null
                                }
                            </tbody>


                        </table>
                        <Pagination onAddPage={onAddPage} totalPages={totalPages} />
                    </div>
                    <div className="col-4 perform show" >
                        <form className={"form-add show" + (submitted && show.showADD ? ' is-invalid' : ' ')}  onSubmit={handleSubmitADD}>
                            <h2>ADD USER</h2>
                            <input type="text" name="id" value={add.id} onChange={handleChangeADD} placeholder="Enter Username"></input>
                            <input type="text" name="url" value={add.url} onChange={handleChangeADD} placeholder="Enter IMG Name"></input>
                            <input type="text" name="name" value={add.name} onChange={handleChangeADD} placeholder="Enter FULL Name"></input>
                            <input type="text" name="createdAt" value={add.createdAt} onChange={handleChangeADD} placeholder="Enter CREATED"></input>
                            <button className="submit">SUBMIT ADD</button>
                        </form>
                        <form className={"form-edit show" + (submitted && show.clickEDIT ? ' is-invalid' : ' ')} onSubmit={handleSubmitEDIT}>
                            <h2>EDIT USER</h2>
                            <input type="text" name="id" value={edit.id} onChange={handleChange} placeholder="Enter Username"></input>
                            <input type="text" name="url" value={edit.url} onChange={handleChange} placeholder="Enter IMG Name"></input>
                            <input type="text" name="name" value={edit.name} onChange={handleChange} placeholder="Enter FULL Name"></input>
                            <input type="text" name="createdAt" value={edit.createdAt} onChange={handleChange} placeholder="Enter CREATED"></input>
                            <button className="submit" >SUBMIT EDIT</button>
                        </form>
                    </div>
                </div>  
            </div>

        </section>

    );
}

export default USER;