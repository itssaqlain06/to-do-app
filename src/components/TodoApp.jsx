import React, { useRef, useState } from 'react'

export default function TodoApp() {
    const [section, setSection] = useState([]);
    const [inputText, setInputText] = useState('');
    const ref = useRef();

    const handleEnterKey = (e) => {
        if (e.key === "Enter") {
            handleTodo();
        }
    }

    const handleTodo = () => {
        const trimmedText = inputText.trim();

        if (trimmedText !== '') {
            setSection([...section, trimmedText]);
            setInputText('');
            ref.current.value = '';
        }
    };

    const handleCompleteTask = (index) => {
        const li = document.getElementsByClassName('li')[index];
        if (li.style.textDecoration == "line-through") {
            li.style.textDecoration = 'none';
        } else {
            li.style.textDecoration = "line-through";
        }
    };

    const handleTaskDel = ((index) => {
        const anotherSection = [...section];
        anotherSection.splice(index, 1);
        setSection(anotherSection);
    })


    return (
        <div className="FatherInLaw">
            <div className="container">
                <div className="child-container">
                    <h2>To Do App</h2>
                    <input type="text" ref={ref} onChange={(e) => setInputText(e.target.value)} onKeyDown={handleEnterKey} />
                    <button className="todoAdd" onClick={() => handleTodo()}>Add</button>
                </div>

                <hr className='hr' />

                <div className="BrotherInLaw">
                    {section.length > 0 && section.map((sectionText, index) => (
                        <ul className="inputSection" key={index}>
                            <li className='li'
                                onClick={() => handleCompleteTask(index)}>
                                {sectionText}
                            </li>
                            <button className='delBtn' onClick={() => handleTaskDel(index)}>X</button>
                        </ul>
                    ))}
                </div>

            </div>
        </div>
    )
}
