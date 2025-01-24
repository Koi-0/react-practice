import { useState } from "react";

const App = () => {
    const [medalList, setMedalList] = useState([]); // 국가와 메달 정보를 저장
    const [newCountry, setNewCountry] = useState(""); // 새 국가 입력값
    const [newGoldMedal, setNewGoldMedal] = useState(0); // 새 금메달 입력값
    const [newSilverMedal, setNewSilverMedal] = useState(0); // 새 은메달 입력값
    const [newBronzeMedal, setNewBronzeMedal] = useState(0); // 새 동메달 입력값
    const [isTitleVisible, setIsTitleVisible] = useState(false); // 타이틀 표시 여부

    // 국가 추가
    const addCountry = (e) => {
        e.preventDefault();

        if (!newCountry.trim()) {
            alert("국가명을 입력해주세요!");
            return;
        }

        const existingEntry = medalList.find((entry) => entry.country === newCountry);

        if (existingEntry) {
            alert(`"${newCountry}"는 이미 존재합니다. 새로운 정보를 업데이트 해주세요.`);
        } else {
            const newEntry = {
                id: crypto.randomUUID(),
                country: newCountry,
                gold: parseInt(newGoldMedal, 10),
                silver: parseInt(newSilverMedal, 10),
                bronze: parseInt(newBronzeMedal, 10),
            };
            setMedalList([newEntry, ...medalList]);
            setIsTitleVisible(true);
            alert(`[ 국가명 : "${newCountry}" ] 성공적으로 추가되었습니다.`);
        }

        // 입력 필드 초기화
        resetFields();
    };

    // 업데이트
    const handleUpdate = (e) => {
        e.preventDefault();

        if (!newCountry.trim() || newGoldMedal === 0 || newSilverMedal === 0 || newBronzeMedal === 0) {
            alert("국가명과 메달의 갯수를 입력해주세요!");
            return;
        }

        setMedalList((prevList) =>
            prevList.map((entry) =>
                entry.country === newCountry
                    ? {
                          ...entry,
                          gold: parseInt(newGoldMedal, 10) || entry.gold,
                          silver: parseInt(newSilverMedal, 10) || entry.silver,
                          bronze: parseInt(newBronzeMedal, 10) || entry.bronze,
                      }
                    : entry
            )
        );

        alert(`"${newCountry}"의 정보가 업데이트되었습니다.`);

        // 입력 필드 초기화
        resetFields();
    };

    // 삭제
    const handleDelete = (id) => {
        const deleteCountry = medalList.find((entry) => entry.id === id)?.country;
        if (deleteCountry) {
            setMedalList(medalList.filter((entry) => entry.id !== id));
            alert(`[ 국가명 : "${deleteCountry}" ] 삭제되었습니다.`);
        }
    };

    // 입력 필드 초기화
    const resetFields = () => {
        setNewCountry("");
        setNewGoldMedal(0);
        setNewSilverMedal(0);
        setNewBronzeMedal(0);
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

                {/* 입력 폼 */}
                <form>
                    <div className="all-input-style">
                        <input type="text" placeholder="국가명" className="input-style" value={newCountry} onChange={(e) => setNewCountry(e.target.value)} />
                        <input type="number" placeholder="0" min="0" className="input-style" value={newGoldMedal} onChange={(e) => setNewGoldMedal(e.target.value)} />
                        <input type="number" placeholder="0" min="0" className="input-style" value={newSilverMedal} onChange={(e) => setNewSilverMedal(e.target.value)} />
                        <input type="number" placeholder="0" min="0" className="input-style" value={newBronzeMedal} onChange={(e) => setNewBronzeMedal(e.target.value)} />
                    </div>
                    <div className="button-style">
                        <button onClick={addCountry}>국가 추가</button>
                        <button onClick={handleUpdate}>업데이트</button>
                    </div>
                </form>
                <div>
                    <label>
                        정렬 기준:
                        <select value={sortBy} onChange={handleSortChange}>
                            <option value="gold">금메달 수</option>
                            <option value="total">총 메달 수</option>
                        </select>
                    </label>
                </div>
            </main>

            <section>
                <div className="section-style">
                    {isTitleVisible && (
                        <ul className="ul-title-style">
                            <li>국가명</li>
                            <li>금메달</li>
                            <li>은메달</li>
                            <li>동메달</li>
                            <li>액션</li>
                        </ul>
                    )}
                    <ul className="ul-list-style">
                        {medalList.map((entry) => (
                            <li key={entry.id} className="list-item-style">
                                <span>{entry.country}</span>
                                <span>{entry.gold}</span>
                                <span>{entry.silver}</span>
                                <span>{entry.bronze}</span>
                                <span>
                                    <button className="delete-button" onClick={() => handleDelete(entry.id)}>
                                        삭제
                                    </button>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {!isTitleVisible && <span className="span-style">아직 추가된 국가가 없습니다. 메달을 추적하세요.</span>}
        </div>
    );
};

export default App;
