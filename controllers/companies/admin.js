import Company from '../../models/Company.js'

const activeCompanyinactive = async (req, res, next) => {
    try {
        let companyActive = await Company.find({
            active: true,
        })
        let companyInactive = await Company.find({
            active: false,
        })
        if (companyActive || companyInactive) {
            return res.status(200).json({
                companyActive,
                companyInactive
            })
        }
    } catch (error) {
        return res
            .status(500)
            .json([{
                succes: false,
                message: [{
                    path: 'internal',
                    message: 'internal server error'
                }]
            }])
    }
}
export default activeCompanyinactive