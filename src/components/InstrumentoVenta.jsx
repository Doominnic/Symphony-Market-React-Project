function InstrumentoVenta({ instrumento }) {
  return (
    <button className="inst">
      <div className="inst-pic"></div>
      {instrumento}
    </button>
  );
}

export default InstrumentoVenta;
