export default function AIBenefits({ title, desc }) {
    return (
        <div>
            <p className="font-bold">Icon</p>
            <h3 className="font-semibold text-base mb-3 xl:text-lg">{title}</h3>
            <p className="text-sm xl:text-base">{desc}</p>
        </div>
    )
}