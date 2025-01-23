import { useState } from "react";

const App = () => {
    const countrys = [""];

    const [country, setCountry] = useState(countrys);

    // 새로운 국가명 입력에 대한 상태 관리
    const [newCountry, SetNewCountry] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!newCountry.trim()) {
            return;
        }

        setCountry([{ id: crypto.randomUUID(), text: newCountry }, ...country]);

        SetNewCountry("");
        document.querySelector(".span-style").style.display = "none";
    };

    // 국가명 input 태그의 변경을 감지하여 상태에 입력값 저장
    const handleCountryInputChange = (e) => {
        SetNewCountry(e.target.value);
    };

    return (
        <div className="app-style">
            <main>
                <h2>2024 파리 올림픽</h2>
                <ul className="main-ul-style">
                    <li>국가명</li>
                    <li>금메달</li>
                    <li>은메달</li>
                    <li>동메달</li>
                </ul>
                <form onSubmit={handleSubmit}>
                    <div className="all-input-style">
                        <input type="text" placeholder="국가명" className="input-style" value={newCountry} onChange={handleCountryInputChange} />
                        <input type="number" placeholder="0" min="0" className="input-style" />
                        <input type="number" placeholder="0" min="0" className="input-style" />
                        <input type="number" placeholder="0" min="0" className="input-style" />
                    </div>
                    <div className="button-style">
                        <button type="submit">국가 추가</button>
                        <button>업데이트</button>
                    </div>
                </form>
            </main>
            <section>
                <ul className="section-ul-style">
                    <li>
                        {country.map((country) => (
                            <li key={country.id}>{country.text}</li>
                        ))}
                    </li>
                    <li>
                        {country.map((country) => (
                            <li key={country.id}>{country.text}</li>
                        ))}
                    </li>
                    <li>
                        {country.map((country) => (
                            <li key={country.id}>{country.text}</li>
                        ))}
                    </li>
                    <li>
                        {country.map((country) => (
                            <li key={country.id}>{country.text}</li>
                        ))}
                    </li>
                </ul>
            </section>
            <span className="span-style">아직 추가된 국가가 없습니다. 메달을 추적하세요.</span>
        </div>
    );
};

export default App;
