import { useState } from "react";

const App = () => {
    // 국가명, 금메달, 은메달, 동메달의 각 input 값들이 추가될 영역
    const medalList = [];

    // const [상태, 상태변경함수] = useState(초기값)
    const [country, setCountry] = useState(medalList);
    const [goldMedal, setGoldMedal] = useState(medalList);
    const [silverMedal, setSilverMedal] = useState(medalList);
    const [bronzeMedal, setBronzeMedal] = useState(medalList);

    // 새로운 입력에 대한 상태 관리
    const [newCountry, SetNewCountry] = useState("");
    const [newGoldMedal, SetNewGoldMedal] = useState("");
    const [newSilverMedal, SetNewSilverMedal] = useState("");
    const [newBronzeMedal, SetNewBronzeMedal] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!newCountry.trim()) {
            return;
        }

        setCountry([{ id: crypto.randomUUID(), text: newCountry }, ...country]);
        setGoldMedal([{ id: crypto.randomUUID(), text: newGoldMedal }, ...goldMedal]);
        setSilverMedal([{ id: crypto.randomUUID(), text: newSilverMedal }, ...silverMedal]);
        setBronzeMedal([{ id: crypto.randomUUID(), text: newBronzeMedal }, ...bronzeMedal]);

        SetNewCountry("");
        SetNewGoldMedal("");
        SetNewSilverMedal("");
        SetNewBronzeMedal("");
        document.querySelector(".span-style").style.display = "none";
    };

    // 국가명을 변경시키는 이벤트 핸들러
    const handleCountryInputChange = (e) => {
        SetNewCountry(e.target.value);
    };

    // 금메달을 변경시키는 이벤트 핸들러
    const handleGoldMedalInputChange = (e) => {
        SetNewGoldMedal(e.target.value);
    };

    // 은메달을 변경시키는 이벤트 핸들러
    const handleSilverMedalInputChange = (e) => {
        SetNewSilverMedal(e.target.value);
    };

    // 동메달을 변경시키는 이벤트 핸들러
    const handleBronzeMedalInputChange = (e) => {
        SetNewBronzeMedal(e.target.value);
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
                        <input type="number" placeholder="0" min="0" className="input-style" value={newGoldMedal} onChange={handleGoldMedalInputChange} />
                        <input type="number" placeholder="0" min="0" className="input-style" value={newSilverMedal} onChange={handleSilverMedalInputChange} />
                        <input type="number" placeholder="0" min="0" className="input-style" value={newBronzeMedal} onChange={handleBronzeMedalInputChange} />
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
                        {country.map((coun) => (
                            <li key={coun.id}>{coun.text}</li>
                        ))}
                    </li>
                    <li>
                        {goldMedal.map((gold) => (
                            <li key={gold.id}>{gold.text}</li>
                        ))}
                    </li>
                    <li>
                        {silverMedal.map((silver) => (
                            <li key={silver.id}>{silver.text}</li>
                        ))}
                    </li>
                    <li>
                        {bronzeMedal.map((bronze) => (
                            <li key={bronze.id}>{bronze.text}</li>
                        ))}
                    </li>
                </ul>
            </section>
            <span className="span-style">아직 추가된 국가가 없습니다. 메달을 추적하세요.</span>
        </div>
    );
};

export default App;
