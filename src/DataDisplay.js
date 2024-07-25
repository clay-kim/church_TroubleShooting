import React, { useContext, useState } from 'react';
import { DataContext } from './DataContext';
import './DataDisplay.css';

const DataDisplay = () => {
    const { data, deleteData, filterData } = useContext(DataContext);
    const [category, setCategory] = useState('');
    const [keyword, setKeyword] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        filterData(category, keyword);
    };

    return (
        <div className='displayDiv'>
            <h2 className='title'>등록된 문제/해결</h2>
            <form onSubmit={handleSearch}>
                <div className='search_category'>
                    <label className='label'>
                        카테고리로 검색:
                        <select value={category} onChange={(e) => setCategory(e.target.value)} className="search_box">
                            <option value="">All</option>
                            <option value="system">System</option>
                            <option value="audio">Audio</option>
                            <option value="video">Video</option>
                            <option value="network">Network</option>
                        </select>
                    </label>
                </div>
                <div className='search_keyword'>
                    <label className='label'>
                        단어로 검색:
                        <input type="text" className="search_box" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                    </label>
                </div>
                <button type="submit" className="search_button">  검색</button>
            </form>
            <ul>
                {data.map((dataItem, index) => (
                    <li key={index} className='list'>
                        <strong>Category:</strong> {dataItem.category} <br />
                        <strong>Problem:</strong> {dataItem.problem} <br />
                        <strong>Solution:</strong> {dataItem.solution} <br />
                        <button className='delete_button' onClick={() => deleteData(index)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataDisplay;
