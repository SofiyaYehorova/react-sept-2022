import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators";
import {carService} from "../../services";

function CarForm({setCars, updateCar, setUpdateCar}) {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand, {shouldValidate: true})
            setValue('price', updateCar.price, {shouldValidate: true})
            setValue('year', updateCar.year, {shouldValidate: true})
        }
    }, [updateCar, setValue])

    const submit = async (newCar) => {
        if (updateCar) {
            const {data} = await carService.updateById(updateCar.id, newCar);
            setCars((cars) => {
                const findCar = cars.find(value => value.id === updateCar.id);
                Object.assign(findCar, data)
                setUpdateCar(null)
                return [...cars]
            })
        } else {
            const {data} = await carService.create(newCar);
            setCars(prev => [...prev, data])
            reset()
        }

    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{updateCar ? 'Update' : 'Save'}</button>
        </form>
    );
}

export {
    CarForm
};