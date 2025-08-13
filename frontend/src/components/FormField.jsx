export default function FormField({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-semibold">{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="border p-2 rounded w-full"
      />
    </div>
  );
}
