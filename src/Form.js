import React, { useState, useContext } from 'react';
import { DataContext } from './DataContext';
import './Form.css'; // Import the CSS file

const Form = () => {
    const { addData } = useContext(DataContext);
    const [formData, setFormData] = useState({
        category: 'system',
        problem: '',
        solution: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addData(formData);
        setFormData({
            category: 'system',
            problem: '',
            solution: ''
        });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };

    return (
        <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
            <div className='category'>
                <label className='label'>
                    카테고리:
                    <select name="category" value={formData.category} onChange={handleChange} className= "category_box">
                        <option value="system">System</option>
                        <option value="audio">Audio</option>
                        <option value="video">Video</option>
                        <option value="network">Network</option>
                    </select>
                </label>
            </div>
            <div className='problem'>
                <label className='label'>
                    문제:
                    <input
                        type="text"
                        name="problem"
                        value={formData.problem}
                        onChange={handleChange}
                        className="problem_box"
                    />
                </label>
            </div>
            <div className='solution'>
                <label className='label'>
                    해결책:
                    <input
                        type="text"
                        name="solution"
                        value={formData.solution}
                        onChange={handleChange}
                        className="solution_box"
                    />
                </label>
            </div>
            <button type="submit" className='submit_button'>등록</button>
        </form>
    );
};

export default Form;
