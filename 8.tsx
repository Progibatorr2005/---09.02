enum ModalStatus {
    Opened = 'Opened',
    Closed = 'Closed',
  }
  
  function buildModal(text: string, status: ModalStatus): { text: string; status: ModalStatus } {
    return {
      text,
      status,
    };
  }
  
  const modal = buildModal('hexlet forever', ModalStatus.Opened);
  console.log(modal);
  // { text: 'hexlet forever', status: 'Opened' }
  
  