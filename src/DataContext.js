import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('formData')) || []);
    const [filteredData, setFilteredData] = useState(data);

    const addData = (newData) => {
        const updatedData = [...data, newData];
        setData(updatedData);
        setFilteredData(updatedData);
        localStorage.setItem('formData', JSON.stringify(updatedData));
    };

    const deleteData = (index) => {
        const updatedData = data.filter((_, i) => i !== index);
        setData(updatedData);
        setFilteredData(updatedData);
        localStorage.setItem('formData', JSON.stringify(updatedData));
    };

    const filterData = (category, keyword) => {
        let result = data;
        if (category) {
            result = result.filter(item => item.category === category);
        }
        if (keyword) {
            result = result.filter(item => item.problem.toLowerCase().includes(keyword.toLowerCase()));
        }
        setFilteredData(result);
    };

    return (
        <DataContext.Provider value={{ data: filteredData, addData, deleteData, filterData }}>
            {children}
        </DataContext.Provider>
    );
};
