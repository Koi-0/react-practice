import { useState } from "react"; // React에서 상태 관리를 도와주는 기능을 가져옴

const App = () => {
    // 국가와 메달 정보를 저장하는 공간 (처음엔 비어 있음)
    const [medalList, setMedalList] = useState([]);

    // 입력한 국가명과 메달 개수를 저장하는 공간
    const [newCountry, setNewCountry] = useState(""); // 새 국가명
    const [newGoldMedal, setNewGoldMedal] = useState(0); // 새 금메달 개수
    const [newSilverMedal, setNewSilverMedal] = useState(0); // 새 은메달 개수
    const [newBronzeMedal, setNewBronzeMedal] = useState(0); // 새 동메달 개수

    const [isTitleVisible, setIsTitleVisible] = useState(false);

    // "국가 추가" 버튼을 눌렀을 때 실행되는 이벤트 핸들러
    const handleSubmit = (e) => {
        e.preventDefault(); // form 태그 > submit 속성의 특징으로 페이지가 새로고침되지 않게 막아줌

        if (!newCountry.trim()) {
            // trim() : 입력한 문자열의 앞뒤 공백을 제거한 후, 입력된 값이 비어 있는지 확인
            return;
        }

        // 새로운 나라와 메달 정보를 목록에 추가
        const newEntry = {
            id: crypto.randomUUID(), // 고유한 번호를 만들어 줌
            country: newCountry, // 새로 적은 나라 이름
            gold: parseInt(newGoldMedal, 10), // 새로 적은 금메달 개수
            silver: parseInt(newSilverMedal, 10), // 새로 적은 은메달 개수
            bronze: parseInt(newBronzeMedal, 10), // 새로 적은 동메달 개수
        };

        // 새로운 정보를 기존 리스트 앞에 추가
        setMedalList([newEntry, ...medalList]);

        // 입력칸 초기화 (다시 비우기)
        setNewCountry("");
        setNewGoldMedal(0);
        setNewSilverMedal(0);
        setNewBronzeMedal(0);

        setIsTitleVisible(true);
    };

    // 공통 이벤트 핸들러
    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
    };

    // 각 상태별 핸들러 생성
    const handleCountryInputChange = handleInputChange(setNewCountry);
    const handleGoldMedalInputChange = handleInputChange(setNewGoldMedal);
    const handleSilverMedalInputChange = handleInputChange(setNewSilverMedal);
    const handleBronzeMedalInputChange = handleInputChange(setNewBronzeMedal);

    // setter : 상태 변경 함수
    // "setter"를 받아서 내부에서 반환하는 함수가 이벤트 객체 e를 처리한다.

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
                <div className="section-style">
                    {isTitleVisible && (
                        <ul className="ul-title-style">
                            <li>국가명</li>
                            <li>금메달</li>
                            <li>은메달</li>
                            <li>동메달</li>
                        </ul>
                    )}
                    <ul className="ul-list-style">
                        <li>
                            {medalList.map((entry) => (
                                <li key={entry.id}>{entry.country}</li>
                            ))}
                        </li>
                        <li>
                            {medalList.map((entry) => (
                                <li key={entry.id}>{entry.gold}</li>
                            ))}
                        </li>
                        <li>
                            {medalList.map((entry) => (
                                <li key={entry.id}>{entry.silver}</li>
                            ))}
                        </li>
                        <li>
                            {medalList.map((entry) => (
                                <li key={entry.id}>{entry.bronze}</li>
                            ))}
                        </li>
                    </ul>
                </div>
            </section>
            {isTitleVisible || <span className="span-style">아직 추가된 국가가 없습니다. 메달을 추적하세요.</span>}
        </div>
    );
};

export default App;
