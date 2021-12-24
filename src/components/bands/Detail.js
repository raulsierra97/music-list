
const Detail = ({detailBandId, handleCancelDetail, bands}) => {
    var detailBand = {
        id: null,
        name: "",
            detail: {
                origin: "",
                yearsActive: "",
                spotify: ""
            }
    }
    if (detailBandId !== undefined) {
    detailBand = bands.find(band => band.id === detailBandId)}

    return (
    <div>
        <h2>{detailBand.name}</h2>  
    <ul>
        {detailBand.detail.origin? (<li>Origen: {detailBand.detail.origin}</li>) : ""}
        {detailBand.detail.yearsActive? (<li>Periodo de actividad: {detailBand.detail.yearsActive}</li>) : ""}
    </ul>
    {detailBand.detail.spotify? (<iframe title="canción"src="https://open.spotify.com/embed/track/0bVtevEgtDIeRjCJbK3Lmv?utm_source=generator" width="30%" height="380" 
    frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>) : ""}
    <button onClick={handleCancelDetail}>Atrás</button>
    </div>
    )
}

export default Detail