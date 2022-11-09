const calc = () => {
const pieceElem = +document.querySelector(".piece").value
const longElem = +document.querySelector(".long").value
const wideElem = +document.querySelector(".wide").value
const heightElem = +document.querySelector(".height").value
const grossElem = +document.querySelector(".gross").value
const volumeWeight = document.querySelector(".volumeweight")
const volume = document.querySelector(".volume")
const totalCw = document.querySelector(".totalcw")

const CalculateVolumeweight = ((pieceElem*longElem*wideElem*heightElem)/6000).toFixed(2)
volumeWeight.innerHTML = CalculateVolumeweight
const CalculateVolume = (((longElem*wideElem*heightElem)/1000000)*pieceElem).toFixed(2)
volume.innerHTML = CalculateVolume
document.querySelector(".volume").innerHTML = CalculateVolume
totalCw.innerHTML = (grossElem > volumeWeight.innerHTML) ? grossElem: volumeWeight.innerHTML}
document.querySelector(".submit").addEventListener("click",calc)

const calc2 = () => {
  const pieceElem = +document.querySelector(".piece2").value
  const longElem = +document.querySelector(".long2").value
  const wideElem = +document.querySelector(".wide2").value
  const heightElem = +document.querySelector(".height2").value
  const grossElem = +document.querySelector(".gross2").value
  const volumeWeight = document.querySelector(".volumeweight2")
  const volume = document.querySelector(".volume2")
  const totalCw = document.querySelector(".totalcw2")
  
  const CalculateVolumeweight = ((pieceElem*longElem*wideElem*heightElem)/6000).toFixed(2)
  volumeWeight.innerHTML = CalculateVolumeweight
  const CalculateVolume = (((longElem*wideElem*heightElem)/1000000)*pieceElem).toFixed(2)
  volume.innerHTML = CalculateVolume
  document.querySelector(".volume2").innerHTML = CalculateVolume
  totalCw.innerHTML = (grossElem > volumeWeight.innerHTML) ? grossElem: volumeWeight.innerHTML}
  document.querySelector(".submit").addEventListener("click",calc2)

  const calc3 = () => {
    const pieceElem = +document.querySelector(".piece3").value
    const longElem = +document.querySelector(".long3").value
    const wideElem = +document.querySelector(".wide3").value
    const heightElem = +document.querySelector(".height3").value
    const grossElem = +document.querySelector(".gross3").value
    const volumeWeight = document.querySelector(".volumeweight3")
    const volume = document.querySelector(".volume3")
    const totalCw = document.querySelector(".totalcw3")
    
    const CalculateVolumeweight = ((pieceElem*longElem*wideElem*heightElem)/6000).toFixed(2)
    volumeWeight.innerHTML = CalculateVolumeweight
    const CalculateVolume = (((longElem*wideElem*heightElem)/1000000)*pieceElem).toFixed(2)
    volume.innerHTML = CalculateVolume
    document.querySelector(".volume3").innerHTML = CalculateVolume
    totalCw.innerHTML = (grossElem > volumeWeight.innerHTML) ? grossElem: volumeWeight.innerHTML}
    document.querySelector(".submit").addEventListener("click",calc3)

    const calc4 = () => {
      const pieceElem = +document.querySelector(".piece4").value
      const longElem = +document.querySelector(".long4").value
      const wideElem = +document.querySelector(".wide4").value
      const heightElem = +document.querySelector(".height4").value
      const grossElem = +document.querySelector(".gross4").value
      const volumeWeight = document.querySelector(".volumeweight4")
      const volume = document.querySelector(".volume4")
      const totalCw = document.querySelector(".totalcw4")
      
      const CalculateVolumeweight = ((pieceElem*longElem*wideElem*heightElem)/6000).toFixed(2)
      volumeWeight.innerHTML = CalculateVolumeweight
      const CalculateVolume = (((longElem*wideElem*heightElem)/1000000)*pieceElem).toFixed(2)
      volume.innerHTML = CalculateVolume
      document.querySelector(".volume4").innerHTML = CalculateVolume
      totalCw.innerHTML = (grossElem > volumeWeight.innerHTML) ? grossElem: volumeWeight.innerHTML}
      document.querySelector(".submit").addEventListener("click",calc4)

      const calc5 = () => {
        const pieceElem = +document.querySelector(".piece5").value
        const longElem = +document.querySelector(".long5").value
        const wideElem = +document.querySelector(".wide5").value
        const heightElem = +document.querySelector(".height5").value
        const grossElem = +document.querySelector(".gross5").value
        const volumeWeight = document.querySelector(".volumeweight5")
        const volume = document.querySelector(".volume5")
        const totalCw = document.querySelector(".totalcw5")
        
        const CalculateVolumeweight = ((pieceElem*longElem*wideElem*heightElem)/6000).toFixed(2)
        volumeWeight.innerHTML = CalculateVolumeweight
        const CalculateVolume = (((longElem*wideElem*heightElem)/1000000)*pieceElem).toFixed(2)
        volume.innerHTML = CalculateVolume
        document.querySelector(".volume5").innerHTML = CalculateVolume
        totalCw.innerHTML = (grossElem > volumeWeight.innerHTML) ? grossElem: volumeWeight.innerHTML}
        document.querySelector(".submit").addEventListener("click",calc5)

        const calc6 = () => {
          const pieceElem = +document.querySelector(".piece6").value
          const longElem = +document.querySelector(".long6").value
          const wideElem = +document.querySelector(".wide6").value
          const heightElem = +document.querySelector(".height6").value
          const grossElem = +document.querySelector(".gross6").value
          const volumeWeight = document.querySelector(".volumeweight6")
          const volume = document.querySelector(".volume6")
          const totalCw = document.querySelector(".totalcw6")
          
          const CalculateVolumeweight = ((pieceElem*longElem*wideElem*heightElem)/6000).toFixed(2)
          volumeWeight.innerHTML = CalculateVolumeweight
          const CalculateVolume = (((longElem*wideElem*heightElem)/1000000)*pieceElem).toFixed(2)
          volume.innerHTML = CalculateVolume
          document.querySelector(".volume6").innerHTML = CalculateVolume
          totalCw.innerHTML = (grossElem > volumeWeight.innerHTML) ? grossElem: volumeWeight.innerHTML}
          document.querySelector(".submit").addEventListener("click",calc6)
          
          const calc7 = () => {
            const pieceElem = +document.querySelector(".piece7").value
            const longElem = +document.querySelector(".long7").value
            const wideElem = +document.querySelector(".wide7").value
            const heightElem = +document.querySelector(".height7").value
            const grossElem = +document.querySelector(".gross7").value
            const volumeWeight = document.querySelector(".volumeweight7")
            const volume = document.querySelector(".volume7")
            const totalCw = document.querySelector(".totalcw7")
            
            const CalculateVolumeweight = ((pieceElem*longElem*wideElem*heightElem)/6000).toFixed(2)
            volumeWeight.innerHTML = CalculateVolumeweight
            const CalculateVolume = (((longElem*wideElem*heightElem)/1000000)*pieceElem).toFixed(2)
            volume.innerHTML = CalculateVolume
            document.querySelector(".volume7").innerHTML = CalculateVolume
            totalCw.innerHTML = (grossElem > volumeWeight.innerHTML) ? grossElem: volumeWeight.innerHTML}
            document.querySelector(".submit").addEventListener("click",calc7)

            const calc8 = () => {
              const pieceElem = +document.querySelector(".piece8").value
              const longElem = +document.querySelector(".long8").value
              const wideElem = +document.querySelector(".wide8").value
              const heightElem = +document.querySelector(".height8").value
              const grossElem = +document.querySelector(".gross8").value
              const volumeWeight = document.querySelector(".volumeweight8")
              const volume = document.querySelector(".volume8")
              const totalCw = document.querySelector(".totalcw8")
              
              const CalculateVolumeweight = ((pieceElem*longElem*wideElem*heightElem)/6000).toFixed(2)
              volumeWeight.innerHTML = CalculateVolumeweight
              const CalculateVolume = (((longElem*wideElem*heightElem)/1000000)*pieceElem).toFixed(2)
              volume.innerHTML = CalculateVolume
              document.querySelector(".volume8").innerHTML = CalculateVolume
              totalCw.innerHTML = (grossElem > volumeWeight.innerHTML) ? grossElem: volumeWeight.innerHTML}
              document.querySelector(".submit").addEventListener("click",calc8)

              const calc9 = () => {
                const pieceElem = +document.querySelector(".piece9").value
                const longElem = +document.querySelector(".long9").value
                const wideElem = +document.querySelector(".wide9").value
                const heightElem = +document.querySelector(".height9").value
                const grossElem = +document.querySelector(".gross9").value
                const volumeWeight = document.querySelector(".volumeweight9")
                const volume = document.querySelector(".volume9")
                const totalCw = document.querySelector(".totalcw9")
                
                const CalculateVolumeweight = ((pieceElem*longElem*wideElem*heightElem)/6000).toFixed(2)
                volumeWeight.innerHTML = CalculateVolumeweight
                const CalculateVolume = (((longElem*wideElem*heightElem)/1000000)*pieceElem).toFixed(2)
                volume.innerHTML = CalculateVolume
                document.querySelector(".volume9").innerHTML = CalculateVolume
                totalCw.innerHTML = (grossElem > volumeWeight.innerHTML) ? grossElem: volumeWeight.innerHTML}
                document.querySelector(".submit").addEventListener("click",calc9)

                const calc10 = () => {
                  const pieceElem = +document.querySelector(".piece10").value
                  const longElem = +document.querySelector(".long10").value
                  const wideElem = +document.querySelector(".wide10").value
                  const heightElem = +document.querySelector(".height10").value
                  const grossElem = +document.querySelector(".gross10").value
                  const volumeWeight = document.querySelector(".volumeweight10")
                  const volume = document.querySelector(".volume10")
                  const totalCw = document.querySelector(".totalcw10")
                  
                  const CalculateVolumeweight = ((pieceElem*longElem*wideElem*heightElem)/6000).toFixed(2)
                  volumeWeight.innerHTML = CalculateVolumeweight
                  const CalculateVolume = (((longElem*wideElem*heightElem)/1000000)*pieceElem).toFixed(2)
                  volume.innerHTML = CalculateVolume
                  document.querySelector(".volume10").innerHTML = CalculateVolume
                  totalCw.innerHTML = (grossElem > volumeWeight.innerHTML) ? grossElem: volumeWeight.innerHTML}
                  document.querySelector(".submit").addEventListener("click",calc10)

const resetCalc = () => {window.location.reload()}
                  document.querySelector(".reset").addEventListener("click",resetCalc)

            

