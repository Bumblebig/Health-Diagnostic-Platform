import { PriceFeatures } from ".";
export default function PriceCard({ type, price, features, recommended }) {
    const listFeatures = features.map(feature => <PriceFeatures item={feature} />)
    return (
        <figure className={`bg-gray-100 w-[250px] p-8 rounded-md text-gray-800 relative ${recommended && "border-secondary border"}`}>
            <div>
                <h3 className="font-semibold text-secondary">{type}</h3>
                <p className="font-semibold text-3xl mt-2 mb-6">${price}<span className="text-xl text-gray-700">/Month</span></p>
                <p className="mt-4 mb-2">Includes:</p>
                <ul className="pl-4 flex flex-col gap-2">
                    {listFeatures}
                </ul>
            </div>

            {recommended && <p className="text-xs absolute bg-secondary text-white w-max top-[50%] translate-y-1/2 right-[-44px] px-2 py-1 -rotate-90">Recommended</p>}
        </figure>
    )
}