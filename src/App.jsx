import { useState } from "react";

const App = () => {
    const [medalList, setMedalList] = useState([]); // 국가와 메달 정보를 저장
    const [newCountry, setNewCountry] = useState(""); // 새 국가 입력값
    const [newGoldMedal, setNewGoldMedal] = useState(0); // 새 금메달 입력값
    const [newSilverMedal, setNewSilverMedal] = useState(0); // 새 은메달 입력값
    const [newBronzeMedal, setNewBronzeMedal] = useState(0); // 새 동메달 입력값
    const [isTitleVisible, setIsTitleVisible] = useState(false); // 타이틀 표시 여부
    const [editId, setEditId] = useState(null); // 현재 수정 중인 ID

    // 국가 추가 또는 업데이트
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!newCountry.trim()) {
            alert("국가명을 입력해주세요!");
            return;
        }

        if (editId) {
            // 업데이트 로직
            setMedalList((prevList) =>
                prevList.map((entry) =>
                    entry.id === editId
                        ? {
                              ...entry,
                              country: newCountry,
                              gold: parseInt(newGoldMedal, 10) || entry.gold,
                              silver: parseInt(newSilverMedal, 10) || entry.silver,
                              bronze: parseInt(newBronzeMedal, 10) || entry.bronze,
                          }
                        : entry
                )
            );
            setEditId(null); // 수정 상태 해제
        } else {
            // 추가 로직
            const newEntry = {
                id: crypto.randomUUID(),
                country: newCountry,
                gold: parseInt(newGoldMedal, 10),
                silver: parseInt(newSilverMedal, 10),
                bronze: parseInt(newBronzeMedal, 10),
            };
            setMedalList([newEntry, ...medalList]);
        }

        // 입력 필드 초기화
        setNewCountry("");
        setNewGoldMedal(0);
        setNewSilverMedal(0);
        setNewBronzeMedal(0);
        setIsTitleVisible(true);
    };

    // 삭제
    const handleDelete = (id) => {
        setMedalList(medalList.filter((entry) => entry.id !== id));
    };

    // 수정 버튼 클릭 시 데이터를 입력 필드에 채우기
    const handleEdit = (id) => {
        const editItem = medalList.find((entry) => entry.id === id);
        setNewCountry(editItem.country);
        setNewGoldMedal(editItem.gold);
        setNewSilverMedal(editItem.silver);
        setNewBronzeMedal(editItem.bronze);
        setEditId(editItem.id); // 수정 중인 항목 ID 저장
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
                <form onSubmit={handleSubmit}>
                    <div className="all-input-style">
                        <input type="text" placeholder="국가명" className="input-style" value={newCountry} onChange={(e) => setNewCountry(e.target.value)} />
                        <input type="number" placeholder="0" min="0" className="input-style" value={newGoldMedal} onChange={(e) => setNewGoldMedal(e.target.value)} />
                        <input type="number" placeholder="0" min="0" className="input-style" value={newSilverMedal} onChange={(e) => setNewSilverMedal(e.target.value)} />
                        <input type="number" placeholder="0" min="0" className="input-style" value={newBronzeMedal} onChange={(e) => setNewBronzeMedal(e.target.value)} />
                    </div>
                    <div className="button-style">
                        {/* <button type="submit">{editId ? "수정 완료" : "국가 추가"}</button> */}
                        <button type="submit">국가 추가</button>
                        <button onClick={() => handleEdit(entry.id)}>업데이트</button>
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
                                <button className="delete-button" onClick={() => handleDelete(entry.id)}>
                                    삭제
                                </button>
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
